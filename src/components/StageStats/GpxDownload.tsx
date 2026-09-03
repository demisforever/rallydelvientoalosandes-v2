import './GpxDownload.css'

type GpxDownloadProps = {
  gpx: string
  fileName: string
}

function GpxDownload({
  gpx,
  fileName,
}: GpxDownloadProps) {
  const handleDownload = () => {
    const blob = new Blob([gpx], {
      type: 'application/gpx+xml',
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = fileName

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <button
      type="button"
      className="gpx-download"
      onClick={handleDownload}
    >
      ↓ Descargar GPX
    </button>
  )
}

export default GpxDownload