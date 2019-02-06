import React, { Component } from 'react';
import axios from 'axios'
import Form from './Form';

export default class VisionData extends Component {
  constructor() {
    super()
    this.state = {
      photos: [],
    }
    this.sendFile = this.sendFile.bind(this)
  }
  componentDidMount() {
    this.getVisionData()
  }
  getVisionData() {
    return axios.get('/photos')
      .then(response => {
        this.setState({
          photos: response.data
        })
      })
  }

  sendFile(file) {
    const formData = new FormData(file);
    formData.append('photo', file)

    fetch("/photos", {
      method: 'POST',
      body: formData
    })
      .then(response => {
        return response.json()
      })
      .then(image => {
        this.setState(ps => ({
          photos: [...ps.photos, image]
        }))
      })
  }

  render() {
    return (
      <div className="data-wrap">
        <div className="data-div">
          <Form sendFile={this.sendFile} />
          <div>{this.state.photos.map(photo => {
            return (
              <div className="data-par" key={photo._id}>
                <img className="img-example" src={`/photos/${photo.filename}`} alt="" />
                <p className="data-name">{photo.originalname}</p>
                {photo.textAnnotations && <p>Text Annotation: {photo.textAnnotations}</p>}
                {photo.labelAnnotations.map(annotation => {
                  return (
                    <div className="data-par" key={annotation._id}>
                      <p>{annotation.description}</p>
                      <p>{(annotation.score * 100).toLocaleString({ maximumFractionDigits: 1 }) + '%'}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}