import { getCustomRepository } from 'typeorm';
import { PaginationAwareObject } from 'typeorm-pagination/dist/helpers/pagination';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<PaginationAwareObject> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.createQueryBuilder().paginate();

    return users;
  }
}

export default ListUserService;
