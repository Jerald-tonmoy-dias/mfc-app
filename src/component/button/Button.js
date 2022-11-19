import React from 'react';
import { ButtonElement } from './Button.styled';
export default function Button({ text }) {
    return (
        <ButtonElement>
            {text}
        </ButtonElement>
    )
}
