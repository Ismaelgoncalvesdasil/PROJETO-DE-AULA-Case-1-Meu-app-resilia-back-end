import { openDb } from '../confgDB.js';

export async function createTables() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS filmes ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"titulo" text,"descricao" text,"porcentagem" INTEGER)',
    );
  });
}
