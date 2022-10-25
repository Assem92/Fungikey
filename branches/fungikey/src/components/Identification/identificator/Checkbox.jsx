import React from "react";
import {Form} from "react-bootstrap"

/**
 * @author Helena Li
 * @constant Checkbox une case "checkbox" cochable
 * Basé sur la doc de React-Table, c'est une case cochable afin d'afficher/enlever toutes les colonnes d'un tableau
 */
export const Checkbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

  
    return <Form.Check type ="checkbox" ref={resolvedRef} {...rest} label="Tout Afficher" />
  }
)
