export default function () {
  this.get('/users/:id')
  this.get('/companies/')
  this.get('/invitations/:id')
  this.post('/invitations/', (schema, req) => {
    const invitation = schema.create('invitation')
    const {
      data: {
        attributes: { email },
      },
    } = JSON.parse(req.requestBody)

    setTimeout(() => {
      invitation.update(
        'invitationUrl',
        `https://invitation-link.com/${invitation.id}?email=${email}`
      )
    }, 4000)
    return invitation
  })
}
