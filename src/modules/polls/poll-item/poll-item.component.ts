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
    public poll: String = '';
    public selectedOption: String = '';
    private totalPoint = 0;
    private buttonText: String = 'Next';

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
        if (this.buttonText === 'Next') {
            if (this.selectedOption === this.polls[this.pollIndex].answer) {
                this.totalPoint += 5;
            }
            console.log('total--point---', this.totalPoint);
            if (this.pollIndex < (this.pollLength - 1)) {
                this.pollIndex++;
                this.selectedOption = '';
            }
            if (this.pollIndex === (this.pollLength - 1)) {
                this.buttonText = 'Submit';
            }
        } else if (this.buttonText === 'Submit') {
            alert('You have successfully completed the test');
            const scoreData = {
                name: 'Name',
                score: this.totalPoint
            };
            this.pollsService.submitScore(scoreData)
            .subscribe(
                data => {

                },
                error => this.errorMessage = error
            );
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

    onSelection(selectedOption) {
        this.selectedOption = selectedOption;
    }
}
