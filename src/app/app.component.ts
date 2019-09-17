import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { createGitgraph } from "@gitgraph/js";
import { GitgraphUserApi } from '@gitgraph/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gitgraph', {static: true}) gitgraphEl: ElementRef;
  title = 'life-init';
  gitgraph: GitgraphUserApi<any>;

  ngAfterViewInit() {
    this.gitgraph = createGitgraph(this.gitgraphEl.nativeElement);
    const master = this.gitgraph.branch('master');
    master.commit("Init the project");
    master
        .commit("Add README")
        .commit("Add tests")
        .commit("Implement feature");


  }
}
