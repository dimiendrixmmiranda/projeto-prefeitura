import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function Page() {
    return (
        <Template>
            <div className="flex flex-col p-4 text-black gap-10 max-w-[1000px] mx-auto">
                <div className="w-full overflow-hidden border-b-2 border-[--verde] flex justify-center items-end">
                    <div className="relative z-10 w-[160px] h-[160px] rounded-full border-2 border-[--verde] overflow-hidden lg:w-[220px] lg:h-[220px] -mb-4">
                        <Image src={'/wireframe.png'} alt={'teste'} fill className="object-cover"></Image>
                    </div>
                    <div className="relative -ml-4 w-[100px] h-[100px] rounded-full border-2 border-[--verde] overflow-hidden lg:w-[130px] lg:h-[130px] -mb-4">
                        <Image src={'/wireframe.png'} alt={'teste'} fill className="object-cover"></Image>
                    </div>
                </div>
                <div className="-mt-6">
                    <h2 className="font-black text-2xl text-center leading-7">Memphis Depay e Angel Romero</h2>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold">Prefeito Memphis Depay</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus erat, interdum quis mollis volutpat, aliquet et diam. Ut in sodales eros. Suspendisse semper tempor neque. Phasellus semper nec sem vel mollis. Quisque id nibh mi. Vestibulum placerat quis orci non porta. Donec eu sagittis lorem. Integer posuere maximus mollis. Vestibulum hendrerit lacinia pellentesque. Fusce sed nisi venenatis, mattis turpis ut, mollis nisl. Sed accumsan nunc in ligula posuere molestie. Quisque porta mollis tortor, sed tincidunt libero mattis non.
                    </p>
                    <p>

                        Mauris et laoreet magna. In pharetra dolor quis nunc condimentum, eget dignissim mi dictum. Nullam sollicitudin mi finibus nibh euismod efficitur. Quisque faucibus, dolor sit amet molestie elementum, lectus tellus cursus purus, in scelerisque enim lorem vel nulla. Cras sed quam tempor, dignissim metus non, convallis mauris. Nulla lectus elit, consectetur sed malesuada non, scelerisque ac libero. Fusce suscipit id nulla quis commodo. Nulla dictum neque eu nisi ornare sollicitudin. Suspendisse congue risus ut risus maximus suscipit. Ut at nisl quis lorem tempor vehicula id ut felis.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold">Vice Prefeito Angel Romero</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus erat, interdum quis mollis volutpat, aliquet et diam. Ut in sodales eros. Suspendisse semper tempor neque. Phasellus semper nec sem vel mollis. Quisque id nibh mi. Vestibulum placerat quis orci non porta. Donec eu sagittis lorem. Integer posuere maximus mollis. Vestibulum hendrerit lacinia pellentesque. Fusce sed nisi venenatis, mattis turpis ut, mollis nisl. Sed accumsan nunc in ligula posuere molestie. Quisque porta mollis tortor, sed tincidunt libero mattis non.
                    </p>
                    <p>

                        Mauris et laoreet magna. In pharetra dolor quis nunc condimentum, eget dignissim mi dictum. Nullam sollicitudin mi finibus nibh euismod efficitur. Quisque faucibus, dolor sit amet molestie elementum, lectus tellus cursus purus, in scelerisque enim lorem vel nulla. Cras sed quam tempor, dignissim metus non, convallis mauris. Nulla lectus elit, consectetur sed malesuada non, scelerisque ac libero. Fusce suscipit id nulla quis commodo. Nulla dictum neque eu nisi ornare sollicitudin. Suspendisse congue risus ut risus maximus suscipit. Ut at nisl quis lorem tempor vehicula id ut felis.
                    </p>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}