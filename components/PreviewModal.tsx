import usePreviewModal from '@/hooks/use-preview-modal'
import { FC } from 'react'
import Modal from './ui/modal'
import Image from 'next/image';
import Info from './Info';

interface PreviewModalProps {

}

const PreviewModal: FC<PreviewModalProps> = ({ }) => {

  const previewModal = usePreviewModal()

  const product = usePreviewModal(state => state.data)

  if (!product) {
    return null
  }

  return <Modal
    open={previewModal.isOpen}
    onClose={previewModal.onClose}
  >
    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      <div className="sm:col-span-4 lg:col-span-5">
        <div className="relative w-full aspect-square rounded-md">
          <Image src={product.image.url} alt='Image' fill className="absolute inset-0 aspect-square object-cover rounded-md" />
        </div>
      </div>
      <div className="sm:col-span-8 lg:col-span-7">
        <Info data={product} />
      </div>
    </div>
  </Modal>
}

export default PreviewModal