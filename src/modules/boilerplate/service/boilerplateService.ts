import { injectable, inject } from 'tsyringe';
import {
    BoilerplateRepository,
    BoilerplateItem,
} from '../repository/boilerplateRepository.js';

@injectable()
export class BoilerplateService {
    constructor(
        @inject(BoilerplateRepository)
        private repository: BoilerplateRepository,
    ) {}

    public async getAllItems(): Promise<BoilerplateItem[]> {
        return this.repository.getAll();
    }

    public async getItemById(id: number): Promise<BoilerplateItem | null> {
        return this.repository.getById(id);
    }
}
