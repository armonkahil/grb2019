import React from 'react'
import Card from '../Card'
import Row from '../Row'
import Column from '../Column'
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
        <Row spacing='container align-self-center'>
          <Column>
            <ImageContainer thumbnail={thumbnail} />
          </Column>
        </Row>
        <Row>
          <div className='card-title'>
            <Column>
              <Row spacing='container'>
                <Row spacing='container'>
                  <h3 className='display-6 Card-title'>{title}</h3>
                </Row>
                {subtitle === undefined ? (
                  <>
                    <h4 className='Card-subtitle font-italic'>{authors}</h4>
                  </>
                ) : (
                  <>
                    <Row spacing='container my-1'>
                      <h4 className='card-subtitle'>{subtitle}</h4>
                    </Row>
                    <Row spacing='container my-1'>
                      <h4 className='card-subtitle'>{authors}</h4>
                    </Row>
                  </>
                )}
              </Row>
            </Column>
            <Row spacing='container'>
              <p className='container text-center '>{description}</p>
            </Row>
          </div>
        </Row>

        <Row spacing='container justify-content-end pl-4'>
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
