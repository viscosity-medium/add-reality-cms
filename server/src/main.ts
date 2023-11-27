import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path';
import { json } from "express";

async function bootstrap() {

    const port = process.env.NEST_SERVER_PORT;
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setGlobalPrefix("server-api");
    app.useStaticAssets(join(__dirname, "..", "static"), {prefix: "/static"});
    app.use(json({ limit: "50mb" }));

    await app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

}

(async () => {
    await bootstrap();
})();
