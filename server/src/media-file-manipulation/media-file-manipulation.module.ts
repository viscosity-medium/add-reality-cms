import {Module} from '@nestjs/common';
import {MediaFileManipulationService} from './media-file-manipulation.service';

@Module({
    providers: [MediaFileManipulationService],
    exports: [MediaFileManipulationService]
})
export class MediaFileManipulationModule {
}
