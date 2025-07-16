import 'reflect-metadata';
import { container } from 'tsyringe';
import { IocContainer } from '@tsoa/runtime';

export { container };

export const iocContainer: IocContainer = {
    get: <T>(controller: { prototype: T } | any): T => {
        if (typeof controller === 'function') {
            return container.resolve(controller);
        }
        return container.resolve(controller as any);
    },
};
