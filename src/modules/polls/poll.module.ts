import {NgModule} from '@angular/core';
import {routing} from './poll.module.route';
import {PollItemComponent} from './poll-item/poll-item.component';
@NgModule({
    imports: [routing],
    declarations: [PollItemComponent],
    providers: []
})

export class PollModule {}
