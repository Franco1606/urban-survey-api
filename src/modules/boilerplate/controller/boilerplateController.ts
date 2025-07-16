import { injectable, inject } from 'tsyringe';
import {
    Route,
    Get,
    Path,
    Tags,
    Response,
    SuccessResponse,
    Controller,
} from 'tsoa';
import { BoilerplateService } from '../service/boilerplateService.js';
import { BoilerplateItem } from '../repository/boilerplateRepository.js';

@injectable()
@Route('boilerplate')
@Tags('Boilerplate')
export class BoilerplateController extends Controller {
    constructor(
        @inject(BoilerplateService) private service: BoilerplateService,
    ) {
        super();
    }

    @Get('get')
    @SuccessResponse(200, 'Success')
    @Response(500, 'Internal Server Error')
    public async getAll(): Promise<BoilerplateItem[]> {
        return this.service.getAllItems();
    }

    @Get('get/{id}')
    @SuccessResponse(200, 'Success')
    @Response(404, 'Not Found')
    @Response(500, 'Internal Server Error')
    public async getById(@Path() id: number): Promise<BoilerplateItem> {
        const item = await this.service.getItemById(id);

        if (!item) {
            this.setStatus(404);
            throw new Error('Item not found');
        }

        return item;
    }
}
