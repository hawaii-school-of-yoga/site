function Course({
  id,
  title,
  description,
  features,
  pricing,
  photo,
  infoLink,
  times,
}) {
  return `
        <div class="card" style="width: 18rem;">
            <img src="./static/img/courses${photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description[0].slice(0, 120)}...</p>
                <div class="btn-container">
                    ${
                      infoLink
                        ? `<a target="_blank" class="btn btn-primary" href="${infoLink}">Sign Up Now!</a>`
                        : ""
                    } 
                    <button data-toggle="modal" data-target="#${id}Modal" class="btn btn-secondary">
                        Learn More
                    </button>
                </div>

                <div style="z-index: 999999" class="modal fade" id="${id}Modal" tabindex="-1" role="dialog" aria-labelledby="${id}ModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img class="modalImg" src="./static/img/courses${photo}" />
                            <div class="modal-body-text">
                                ${description
                                  .map(
                                    (desc) => `<p class="card-text">${desc}</p>`
                                  )
                                  .join("")}
                                ${
                                  features
                                    ? `
                                    <h5>${features.title}</h5>
                                    <ul>
                                        ${features.items
                                          .map((item) => `<li>${item}</li>`)
                                          .join("")}
                                    </ul>
                                  `
                                    : ""
                                }
                                <h5>Pricing</h5>
                                <ul>
                                    ${pricing
                                      .map(
                                        ({ cost, product }) =>
                                          `<li>${cost}: ${product}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            ${
                              infoLink
                                ? `<a target="_blank" class="btn btn-primary" href="${infoLink}">Sign Up Now!</a>`
                                : `<a href="mailto:zenyhawaiischoolofyoga@gmail.com?subject=[Course Interest] ${title}" class="btn btn-primary">Sign Up Now</a>`
                            }
                            ${`<a href="mailto:zenyhawaiischoolofyoga@gmail.com?subject=[Audio Tape Request] ${title}" class="btn btn-primary">Request Audio Recordings</a>`}
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <style>
            .modal-body {
                padding: 0;
            }

            .modal-body-text {
                padding: 8px;
            }

            img.modalImg {
                width: 100%;
            }
        </style>
    `;
}
