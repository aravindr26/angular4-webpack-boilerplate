import {NgModule} from '@angular/core';
import {routing} from './poll-results.module.route';
import {PollResultComponent} from './poll-result/poll-result.component';

@NgModule({
    imports: [routing],
    declarations: [PollResultComponent],
    providers: []
})

export class PollResultModule {}
