import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
//group  object
export const Form9 = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: [{name:'hossieny',age:40},{name:'zabhihi',age:40}] }}
      onSubmit={values =>
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
        <FieldArray
          name="friends"
          render={arrayHelpers => (
            <div>
              {values.friends.map((friend, index) => (
                <div key={index}>
                  {/** both these conventions do the same */}
                  <Field name={`friends[${index}].name`} />
                  <Field name={`friends.${index}.age`} />
      
                  <button type="button" onClick={() => arrayHelpers.remove(index)}>
                    -
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => arrayHelpers.push({ name: '', age: '' })}
              >
                +
              </button>
              <div>
                  <button type="submit">Submit</button>
                </div>
            </div>
          )}
        />
      </Form>
      )}
    />
  </div>
);