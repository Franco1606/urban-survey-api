import { injectable } from 'tsyringe';

// Define the data model
export interface BoilerplateItem {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

@injectable()
export class BoilerplateRepository {
  private items: BoilerplateItem[] = [
    {
      id: 1,
      name: 'Item One',
      description: 'This is the first boilerplate item',
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Item Two',
      description: 'This is the second boilerplate item',
      createdAt: new Date()
    }
  ];

  public async getAll(): Promise<BoilerplateItem[]> {
    return Promise.resolve([...this.items]);
  }

  public async getById(id: number): Promise<BoilerplateItem | null> {
    const item = this.items.find(item => item.id === id);
    return Promise.resolve(item || null);
  }
}
