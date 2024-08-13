import * as React from "react"

import { FormData } from "@/types/formData"

export const ContactEmailTemplate: React.FC<Readonly<FormData>> = ({
  user_name,
  user_email,
  message,
}) => (
  <div>
    <h1>You&apos;ve got a mail</h1>
    <p>from </p>
    <br />
    {user_name}
    <br />
    {user_email}
    <br />
    <p>and message is below</p>
    <p>{message}</p>
  </div>
)

export const ReplyEmailTemplate: React.FC<Readonly<FormData>> = ({
  user_name,
}) => (
  <div>
    <p>Hey {user_name}</p>
    <p>Thank you for contacting me.</p>
    <p>I will reply to you soon.</p>
    <br />
    <p>Best regards,</p>
    <p>Ben Ono</p>
  </div>
)
