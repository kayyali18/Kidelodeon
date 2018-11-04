import React from 'react'
import { FormattedMessage } from 'react-intl'

import Wrapper from './Wrapper'
import HeaderLink from './HeaderLink'
import messages from './messages'

function Header() {
  return (
    <Wrapper>
      <HeaderLink to="/about">
        <FormattedMessage {...messages.about} />
      </HeaderLink>
    </Wrapper>
  )
}

export default Header
