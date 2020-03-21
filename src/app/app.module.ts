import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ChallengePageComponent } from "./challenge-page/challenge-page.component";

import { HttpClientModule } from "@angular/common/http";
import { GreetingPageComponent } from "./greeting-page/greeting-page.component";
import { PersistenceModule } from "angular-persistence";
import { ChallengeCompletedPageComponent } from "./challenge-completed-page/challenge-completed-page.component";
import { ChallengeCanceledPageComponent } from './challenge-canceled-page/challenge-canceled-page.component';
import { SelectChallengePageComponent } from './select-challenge-page/select-challenge-page.component';
import { CreateChallengePageComponent } from './create-challenge-page/create-challenge-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { Store } from './storage/store';
import { ApiService } from './api-service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChallengePageComponent,
    GreetingPageComponent,
    ChallengeCompletedPageComponent,
    ChallengeCanceledPageComponent,
    SelectChallengePageComponent,
    CreateChallengePageComponent,
    FeedbackPageComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    PersistenceModule
  ],
  providers: [Store, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
