import { Knex } from 'knex'
import { ISpace } from '../models'

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex('space').count<[{ count: number }]>('* as count')
  if (!Number.isInteger(count) || Number(count) > 0) return

  await knex('space').insert(spaces)
}

const spaces = [
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 1
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 2
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 3
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 4
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 5
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 6
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 7
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 8
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 9
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 10
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 11
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 12
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 13
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 14
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 15
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 16
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 17
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 18
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 19
  },
  {
    status: 'Livre',
    placa: null,
    blocoAp: null,
    numeroAp: null,
    numeroVaga: 20
  },
]