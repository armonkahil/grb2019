import React from 'react'
import './style.css'
import Card from '../Card'
import Row from '../Row'
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
      {description === undefined ? (
        <>
          <Card>
            <Row spacing='row align-self-center'>
              <ImageContainer thumbnail={thumbnail} />
              <div className='card-title text-left'>
                <h3 className='display-6'>{title}</h3>
                {subtitle === undefined ? (
                  <>
                    <h4>Written By {authors}</h4>
                  </>
                ) : (
                  <>
                    <h4>{subtitle}</h4>

                    <h4>Written By {authors}</h4>
                  </>
                )}
              </div>
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
      ) : (
        <>
          <Card>
            <Row spacing='row container-fluid justify-content-between'>
              <div className='card-title text-left'>
                <h6 className='display-6'>{title}</h6>
                {subtitle === undefined ? (
                  <>
                    <small>Written By {authors}</small>
                  </>
                ) : (
                  <>
                    <small>{subtitle}</small>
                    <br></br>
                    <small>written By {authors}</small>
                  </>
                )}
              </div>
              <ButtonContainer
                link={link}
                onClick={onClick}
                handleSave={handleSave}
                saved={saved}
                  delete={handleDelete}
                  id={id}
              />
            </Row>
            <div className='card border-light mb-3'>
              <Row>
                <ImageContainer thumbnail={thumbnail} />

                <div className='col'>
                  <div className='card-body'>
                    <p className='card-text overflow-auto text-left'>
                      {description}
                    </p>
                  </div>
                </div>
              </Row>
            </div>
          </Card>
        </>
      )}
    </>
  )
}

export default Book
