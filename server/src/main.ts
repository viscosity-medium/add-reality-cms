import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path';
import { json } from "express";
import * as process from "process";

declare const module: any;

async function bootstrap() {

    const port = process.env.NEST_SERVER_PORT;
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: {
            origin: ["http://localhost:3000"]
        },
    });

    app.setGlobalPrefix("server-api");
    app.useStaticAssets(join(process.cwd(), "static"), {prefix: "/static"});
    app.use(json({ limit: "50mb" }));
    //app.use(raw({type: 'application/octet-stream', limit: "100mb"}));

    await app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }

}

(async () => {
    await bootstrap();
})();
