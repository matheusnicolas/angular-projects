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

  endGame(line: number, column: number, board: any, player: number): void {
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

}
