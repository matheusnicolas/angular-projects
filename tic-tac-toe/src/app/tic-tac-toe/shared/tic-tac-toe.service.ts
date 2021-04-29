import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly BOARD_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private numMovements: number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showFinal: boolean;

  constructor() { }
  

  initialize(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showFinal = false;
    this.numMovements = 0;
    this._player = this.X;
    this.victory = false;
    this.initializeBoard();
  }

  initializeBoard(): void {
    this.board = [this.BOARD_SIZE];
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  get showStart(): boolean {
    return this._showStart;
  }

  get showBoard(): boolean {
    return this._showBoard;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get player(): number {
    return this._player;
  }

  startGame(): void {
    this._showStart = false;
    this._showBoard = true;
  }

  play(positionX: number, positionY: number): void {

    if (this.board[positionX][positionY] !== this.EMPTY || this.victory) {
      return;
    }

    this.board[positionX][positionY] = this._player;
    this.numMovements++;
    this.victory = this.endGame(positionX, positionY, this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    if (!this.victory && this.numMovements < 9) {
      this.cpuPlay();
    }

    if (this.victory !== false) {
      this._showFinal = true;
    }

    if (!this.victory && this.numMovements === 9) {
      this._player = 0;
      this._showFinal = true;
    }
  }

  endGame(line: number, column: number, board: any, player: number) {
    let end: any = false;

    if (board[line][0] === player && board[line][1] === player && board[line][2] === player) {
      end = [[line, 0], [line, 1], [line, 2]]
    }

    if (board[0][column] === player && board[1][column] === player && board[2][column] === player) {
      end = [[0, column], [1, column], [2, column]]
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]]
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      end = [[0,2], [1, 1], [2, 0]]
    }

    return end;

  }

  cpuPlay(): void {
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      let moves: any = [];
      for (let i = 0; i < this.BOARD_SIZE; i++) {
        for (let j = 0; j < this.BOARD_SIZE; j++) {
          if (this.board[i][i] === this.EMPTY) {
            moves.push([i, j])
          }
        }
      }
      let k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }
    this.board[move[0]][move[1]] = this._player;
    this.numMovements++;
    this.victory = this.endGame(move[0], move[1],
        this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;
  }

  getMove(player: number): number[] {
    let tab = this.board;
    for (let lin = 0; lin < this.BOARD_SIZE; lin++) {
      for (let col = 0; col < this.BOARD_SIZE; col++) {
        if (tab[lin][col] !== this.EMPTY) {
          continue;
        }
        tab[lin][col] = player;
        if (this.endGame(lin, col, tab, player)) {
          return [lin, col];
        }
        tab[lin][col] = this.EMPTY;
      }
    }
    return [];
  }

  showX(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.X;
  }

  showO(positionX: number, positionY: number): boolean {
    return this.board[positionX][positionY] === this.O;
  }

  showVictory(positionX: number, positionY: number): boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let position of this.victory) {
      if (position[0] === positionX && position[1] === positionY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }


  newJogo(): void {
    this.initialize();
    this._showFinal = false;
    this._showStart = false;
    this._showBoard = true;
  }

}
