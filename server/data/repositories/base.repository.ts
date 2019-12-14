import {
	DeleteResult,
	Repository,
	SelectQueryBuilder,
	ObjectLiteral,
	FindConditions
} from 'typeorm';

export default abstract class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
	/**
	 * Creates new entity in DB
	 * @param {E | E[]} [entities] Entity or entities to create
	 */
	public createEntity<E extends T | T[]>(entities: E): Promise<E> {
		if (entities instanceof Array) {
			for (const entity of entities as T[]) {
				// TODO:  fix any to T
				(entity as any).id = undefined;
			}
		} else {
			// TODO:  fix any to T
			(entities as any).id = undefined;
		}

		return this.updateEntity(entities);
	}

	/**
	 * Returns all entities
	 * // TODO: Add pagination, parameters to find by
	 */
	public getAll(): Promise<T[]> {
		return this.find({});
	}

	/**
	 * Deletes entity by it's Id
	 * @param entities id of entity to delete
	 * @param {string} [entityName="Entity"] name of entity to delete
	 * @throws {NotFoundError} will throw an error if entity with such id not found
	 */
	public async deleteEntity(
		entities: number | string | T | T[],
		entityName = 'Entity'
	): Promise<boolean> {
		let deletePromise: Promise<DeleteResult | T | T[]> = null;

		if (typeof entities === 'number' || typeof entities === 'string') {
			await this.checkEntity(entities, entityName);
			deletePromise = this.delete(entities);
		} else {
			// TODO: Unhandled if there are no such entities or entity
			deletePromise = this.remove(entities as any);
		}

		return deletePromise.then(() => {
			return Promise.resolve(true);
		});
	}

	/**
	 * Gets entity by it's Id
	 * @param id id of entity to find
	 */
	public getById(id: number | string): Promise<T> {
		const queryBuilder = this.getQueryBuilderWithIdFilter(id);
		return queryBuilder.getOne();
	}

	/**
	 * Gets entity by it's Id
	 * @param id id of entity to get
	 * @param {string} [entityName="Entity"] name of entity to get
	 * @throws {NotFoundError} will throw an error if entity with such id not found
	 */
	public async getByIdAndCheck(id: number | string, entityName = 'Entity'): Promise<T> {
		const entity = await this.getById(id);
		return entity;
	}

	/**
	 * Checks if entity exists it's Id
	 * @param id id of entity to check if exists
	 * @param {string} [entityName="Entity"] name of entity to check if exists
	 * @throws {NotFoundError} will throw an error if entity with such id not found
	 */
	public async checkEntity(id: number | string, entityName = 'Entity'): Promise<void> {
		const exists = await this.exist(id);
	}

	/**
	 * Updates entity in DB based on it's primary key
	 * @param {E} [entities] Entity to update
	 */
	public updateEntity<E extends T | T[]>(entities: E): Promise<E> {
		return this.save(entities as any) as Promise<E>;
	}

	/**
	 * Checks if entity exists in DB by it's id and if exists then
	 * Updates it in DB based on it's primary key
	 * @param {E} [entity="Entity"] Entity to update
	 * @param {string} [entityName='Entity'] Entity name to update
	 */
	public async checkAndUpdateEntity<E extends T>(entity: E, entityName = 'Entity'): Promise<E> {
		await this.checkEntity(entity.id, entityName);
		return this.updateEntity(entity);
	}

	/**
	 * Checks if entity exists it's Id and returns true or false
	 * @param id id of entity to check if exists
	 */
	public async exist(id: number | string): Promise<boolean> {
		const queryBuilder = this.getQueryBuilderWithIdFilter(id);
		const existingAmount = await queryBuilder.getCount();
		return existingAmount > 0;
	}

	/**
	 * Checks if entity exists that matches match given conditions
	 */
	public async existByConditions(conditions?: FindConditions<T>): Promise<boolean> {
		const countOfMatches = await this.count(conditions);
		return countOfMatches > 0;
	}

	private getQueryBuilderWithIdFilter(id: number | string): SelectQueryBuilder<T> {
		const alias: string = 'entity';
		let queryBuilder: SelectQueryBuilder<T> = this.createQueryBuilder(alias);
		queryBuilder = queryBuilder.where(`${alias}.id = :id`, { id });

		return queryBuilder;
	}
}