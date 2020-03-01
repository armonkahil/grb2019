import React from 'react'
import Card from '../Card'
import { Column, Row } from '../Grid'
import ImageContainer from '../ImageContainer'
import ButtonContainer from '../ButtonContainer'

function Book({
  id,
  title,
  description,
  thumbnail,
  subtitle,
  authors,
  handleSave,
  link,
  onClick,
  saved,
  handleDelete
}) {
  return (
    <>
      <Card>
        <Row styling='container align-self-center'>
          <Column styling='justify-content-center text-center'>
            <ImageContainer thumbnail={thumbnail} />
          </Column>
        </Row>
        <Row>
          <div className='card-title'>
            <Column>
              <Row styling='container'>
                <Row styling='container'>
                  <h3 className='display-6 Card-title'>{title}</h3>
                </Row>
                {subtitle === undefined ? (
                  <>
                    <h4 className='Card-subtitle font-italic'>{authors}</h4>
                  </>
                ) : (
                  <>
                    <Row styling='container my-1'>
                      <h4 className='card-subtitle'>{subtitle}</h4>
                    </Row>
                    <Row styling='container my-1'>
                      <h4 className='card-subtitle'>{authors}</h4>
                    </Row>
                  </>
                )}
              </Row>
            </Column>
            <Row styling='container'>
              <p className='container text-center '>{description}</p>
            </Row>
          </div>
        </Row>

        <Row styling='container justify-content-end pl-4'>
          <ButtonContainer
            link={link}
            onClick={onClick}
            handleSave={handleSave}
            saved={saved}
            delete={handleDelete}
            id={id}
          />
        </Row>
      </Card>
    </>
  )
}

export default Book
