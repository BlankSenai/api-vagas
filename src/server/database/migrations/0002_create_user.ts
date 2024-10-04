import { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex
    .schema
    .createTable('user', table => {
      table.bigIncrements('id').primary().index()
      table.string('nome').notNullable()
      table.string('sobrenome').notNullable()
      table.string('data').notNullable()
      table.string('email').notNullable()
      table.string('senha').notNullable()
    })
    .then(() => {
      console.log('# Created table user')
    })
  }
  
export async function down(knex: Knex) {
  return knex
  .schema
  .dropTable('user')
  .then(() => {
    console.log('# Dropped table user')
  })
}
