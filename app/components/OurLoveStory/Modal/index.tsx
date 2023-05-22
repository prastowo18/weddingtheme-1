import React, { useMemo } from "react";

interface IProps {
  modalOpen: boolean;
  modalClose: () => void;
}
export function Modal(props: IProps) {
  const { modalOpen, modalClose } = props;
  const renderMain = useMemo(() => {
    return (
      <div
        className={`relative z-50 ${modalOpen ? "block" : "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    First Meet
                    <span className="block font-light">2019</span>
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odit explicabo distinctio eveniet dolorum facere neque.
                      Praesentium tempora commodi, ex sapiente aliquam velit,
                      labore omnis incidunt magnam, aliquid harum non
                      repellendus totam optio! Error ex accusamus, itaque
                      adipisci labore inventore rem est maiores ab, qui vitae
                      laboriosam expedita id sapiente veritatis. Reprehenderit
                      nobis necessitatibus molestiae earum officiis ducimus
                      dolorem possimus fugiat accusamus laudantium. Facilis eius
                      id alias accusantium vel aperiam. Commodi hic, velit sunt
                      voluptates nihil rerum repellat possimus blanditiis
                      reprehenderit cupiditate, inventore, vero magnam? Alias
                      ducimus at maxime! Ad quam aspernatur fuga natus minima
                      accusantium saepe dignissimos, molestiae adipisci quos!
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-[#9AA977]/20 sm:px-6">
                <button
                  type="button"
                  onClick={modalClose}
                  className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [modalOpen, modalClose]);

  return renderMain;
}

export default Modal;
