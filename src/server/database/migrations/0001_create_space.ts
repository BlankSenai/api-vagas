import { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex
    .schema
    .createTable('space', table => {
      table.bigIncrements('id').primary().index()
      table.string('status').notNullable()
      table.string('placa').nullable()
      table.string('blocoAp').nullable()
      table.integer('numeroVaga').notNullable()
      table.integer('numeroAp').nullable()
    })
    .then(() => {
      console.log('# Created table space')
    })
  }
  
export async function down(knex: Knex) {
  return knex
  .schema
  .dropTable('space')
  .then(() => {
    console.log('# Dropped table space')
  })
}
