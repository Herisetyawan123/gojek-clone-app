import { useEffect, useState } from "react"
import { PagerViewOnPageSelectedEvent, usePagerView } from "react-native-pager-view";

const useSliders = () => {
  const data = [
    {
      illustration: "@/assets/illustrations/illustration (3).png",
      welcomeText: "Selamat datang di gojek!",
      paragraph: "Aplikasi yang bikin hidupmu lebih nyaman. Siap bantuin  semua kebutuhan mu, kapanpun, dan dimanapun",
    },
    {
      illustration: "@/assets/illustrations/illustration (2).png",
      welcomeText: "Transportasi & logistik",
      paragraph: "Antarin kamu jalan atau ambilin barang lebih gampang tinggal  ngeklik doang",
    },
    {
      illustration: "@/assets/illustrations/illustration (1).png",
      welcomeText: "Pesan makan & belanja",
      paragraph: "Lagi ngidam sesuatu? Gojek beliin gak pakai lama.",
    },
    {
      illustration: "@/assets/illustrations/illustration (4).png",
      welcomeText: "Pembayaran",
      paragraph: "Aplikasi yang bikin hidupmu lebih nyaman. Siap bantuin  semua kebutuhan mu, kapanpun, dan dimanapun",
    },
    {
      illustration: "@/assets/illustrations/illustration (5).png",
      welcomeText: "Berita & hiburan",
      paragraph: "Antarin kamu jalan atau ambilin barang lebih gampang tinggal  ngeklik doang~",
    },
    {
      illustration: "@/assets/illustrations/illustration (6).png",
      welcomeText: "Jasa Profesional",
      paragraph: "Lagi ngidam sesuatu? Gojek beliin gak pakai lama.",
    },
  ]
  const pager = usePagerView({ pagesAmount: data.length });
  const [position, setPosition] = useState<number>(0);

  const onSelectedPage = (e: PagerViewOnPageSelectedEvent) => {
    setPosition(e.nativeEvent.position)
  }

  const goToPage = (id: number) => {
    pager.setPage(id)
  }

  return {
    data,
    position,
    onSelectedPage,
    pager,
    goToPage,
  }
}

export default useSliders;