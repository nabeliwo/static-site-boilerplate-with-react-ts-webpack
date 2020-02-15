import React, { FC } from 'react'

export const App: FC<{ title: string }> = ({ title }) => (
  <>
    <h1>{title}</h1>
    <img src="/assets/img/icon.png" />
  </>
)
