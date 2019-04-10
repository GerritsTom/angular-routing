import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // is one way to get the server
    // const id = +this.route.snapshot.params['id'];
    // // convert to number
    // this.server = this.serversService.getServer(id);

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    // another way to load the server is via a resolver
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

  }

  onEditServer() {
    // load the edit page...
    // one way
    this.router.navigate(['/servers', this.server.id, 'edit'], {queryParamsHandling: 'preserve'});
    // or, because we are already on the path... use a releative path
    //this.router.navigate(['edit'], {relativeTo: this.route});
    // current path http://localhost:4200/servers/1?allowEdit=1 => http://localhost:4200/servers/1/edit
  }

}
