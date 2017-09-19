import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service';

export class Polls {
    id: number;
    category: String;
    question: String;
    options: String;
    answer: String;
}

@Component({
    selector: 'app-poll-item',
    templateUrl: './poll-item.component.html',
    styleUrls: ['./poll-item.component.css']
})
export class PollItemComponent implements OnInit {
    constructor(private pollsService: PollsService) {}
    private errorMessage: String = '';
    private polls: Polls;
    private pollIndex: number;
    public pollLength: number;

    ngOnInit() {
        this.pollsService.getPollList()
        .subscribe(
            polls => {
                this.polls = polls;
                this.pollLength = polls.length;
                this.pollIndex = 0;
            },
            error => this.errorMessage = error
        );
    }

    nextPoll() {
        if (this.pollIndex < (this.pollLength - 1)) {
            this.pollIndex++;
        }
    }

    getPollOption(pollitem) {
        if (this.polls) {
            return this.polls[this.pollIndex].options[pollitem];
        }
    }

    getPollQuestion() {
        if (this.polls) {
            return this.polls[this.pollIndex].question;
        }
    }
}
