import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface Props {
  isVisible: any;
  userDetails: any;
  hideModal: () => any;
  userLatestPost: any;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string | number;
}

export const Modal = ({
  isVisible,
  userDetails,
  hideModal,
  userLatestPost,
}: Props) => {
  const { name, username, email, phone, website, company } = userDetails;

  const { title, body } = userLatestPost;

  const street = userDetails?.address?.street;
  const suite = userDetails?.address?.suite;
  const city = userDetails?.address?.city;
  const zipcode = userDetails?.address?.zipcode;

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="User Details"
        visible={isVisible}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => hideModal()}
      >
        <p className="card">
          <div className="grid">
            <div className="col-6">
              <div className="card">
                <h6>
                  <span className="mr-2">Name:</span>
                  <span>{name}</span>
                </h6>
                <h6>
                  <span className="mr-2">Username:</span>
                  <span>{username}</span>
                </h6>
                <h6>
                  <span className="mr-2">Email:</span>
                  <span>{email}</span>
                </h6>
                <h6>
                  <span className="mr-2">Phone:</span>
                  <span>{phone}</span>
                </h6>
                <h6>
                  <span className="mr-2">Company:</span>
                  <span>{company?.name}</span>
                </h6>
                <h6>
                  <span className="mr-2">Website:</span>
                  <span>{website}</span>
                </h6>

                <h6>
                  <span className="mr-2">Address:</span>
                  <span>{`${street}, ${suite}, ${city}, ${zipcode}`}</span>
                </h6>
              </div>
            </div>

            <div className="col-12">
              <div className="mt-2">
                <h2>Latest Post:</h2>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>
    </div>
  );
};
