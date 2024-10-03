import { Knex } from 'knex'

export async function up(knex: Knex) {
  return knex
    .schema
    .createTable('vehicle', table => {
      table.bigIncrements('id').primary().index()
      table.string('placa').notNullable()
      table.string('dono').notNullable()
      table.string('modelo').notNullable()
      table.string('cor').notNullable()
    })
    .then(() => {
      console.log('# Created table vehicle')
    })
  }
  
export async function down(knex: Knex) {
  return knex
  .schema
  .dropTable('vehicle')
  .then(() => {
    console.log('# Dropped table vehicle')
  })
}
