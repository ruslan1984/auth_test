/**
 * Параметры регистрации
 * @param {string} login
 * @param {string} password
 * @param {string} confirm_password
 * @param {string} email
 */

export type RegisterDataType = {
  login: string;
  password: string;
  confirm_password: string;
  email: string;
}