import {NgModule} from '@angular/core';
import {routing} from './poll.module.route';
import {PollItemComponent} from './poll-item/poll-item.component';
import { PollsService } from './polls.service';
@NgModule({
    imports: [routing],
    declarations: [PollItemComponent],
    providers: [PollsService]
})

export class PollModule {}
