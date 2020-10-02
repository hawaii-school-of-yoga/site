function Course({ id, title, dates, description, features, pricing, photo }) {
  return `
        <div class="card" style="width: 18rem;">
            <img src="${photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description.slice(0, 120)}...</p>

                <button data-toggle="modal" data-target="#${id}Modal" class="btn btn-primary">
                    Learn More
                </button>

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
                            <img class="modalImg" src="${photo}" />
                            <div class="modal-body-text">
                                <p class="card-text">${description}</p>
                                <p><strong>Dates:</strong> ${dates}</p>
                                <h5>${features.title}</h5>
                                <ul>
                                    ${features.items.map((item) => `<li>${item}</li>`).join("")}
                                </ul>
                                <h5>Pricing</h5>
                                <ul>
                                    ${pricing.map(({ cost, product }) => `<li>${cost}: ${product}</li>`).join("")}
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <a href="mailto:zenyhawaiischoolofyoga@gmail.com?subject=[Course Interest] ${title}" class="btn btn-primary">Sign Up Now</a>
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
