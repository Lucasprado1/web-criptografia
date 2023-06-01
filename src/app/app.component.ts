import { Component } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket$: Socket;

  constructor(private socket: Socket) {
    this.socket$ = socket;
  }

ngOnInit() {
    this.socket$ = new WebSocketSubject('ws://localhost:8080');

    this.socket$.subscribe(
      (message) => {
        // Lógica para manipular as mensagens recebidas do socket
        console.log('Mensagem recebida:', message);
      },
      (error) => {
        // Lógica para lidar com erros de conexão
        console.error('Erro na conexão do socket:', error);
      },
      () => {
        // Lógica para lidar com o fechamento da conexão do socket
        console.log('Conexão do socket fechada');
      }
    );
  }


  title = 'web-criptografia';
  public texto: any = '';
  public chave: any = '';
  public selectedOption: any = 'RC4';
  send(){
    console.log(this.texto);
    console.log(this.chave);
    console.log(this.selectedOption);
  }

  sendMessage(message: string) {
    this.socket$.next(message);
  }

}
