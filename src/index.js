import _ from 'lodash'
import Bark from './bark'

export default class K9 {
  constructor () {
    this.tasks = []
  }

  getTasks () {
    return this.tasks
  }

  validTask (task) {
    if (!task.hasOwnProperty('name') ||
        !task.hasOwnProperty('function') ||
        !task.hasOwnProperty('period')) {
      return false
    }

    return true
  }
};
