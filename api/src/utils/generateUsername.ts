const generateUsername = (email: string) => {
  return email.replace(/\./g, '').match(/([^@]+)/)![1]
}

export default generateUsername
