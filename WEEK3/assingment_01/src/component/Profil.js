/**
 * Bu calismada burada hazilamis oldugumuz profil dosyasi export edilmistir.
 * habilozcan@gmail.com
 */
import './Profil.css';

export default function Profil(){
    return(
    <div>
        <main>
            <p id="p00">HABIL OZCAN</p>
            <p id="p01">ERKEK, 39 YAS</p>
            <div class="container">
                <fieldset id="fieldset00">
                    <legend>Bana Ait İşler</legend>
                    <h3>Hobilerim!!!</h3>
                    <ul>
                        <li>Kitap Okumak</li>
                        <li>Belgesel İzlemek</li>
                        <li>Yürüyüş Yapmak</li>
                    </ul>
                    <h3>Becerilerim!!!</h3>
                    <ul>
                        <li>Yüzmek</li>
                        <li>Araba Kullanmak</li>
                        <li>Kaya Tırmanışı</li>
                    </ul>
                </fieldset>
                <img id="img01" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg" alt="galaxy!!!"></img>
                <fieldset id="fieldset01">
                    <legend>Hakkımda</legend>
                    <p>1981 tarihinde Türkiye'min güzide bir Şehrinin güzel bir kasabasında dünyaya geldim. İlk, orta, lise
                        ve
                        üniversite hayatımın akabinde ve devamında en son olarak en yüksek seviyedeki Devletime ve Halkıma
                        dair
                        eğitimimi de tamamladıktan sonra mevcut bilgi ve birikimim nedeniyle güzel Vatanımı terk ettim.
                        Herşeye
                        rağmen pozitif bakış açımdan hiçbir zaman ödün vermeden hayatıma devam ediyorum, birçokları gibi...
                    </p>
                    <p>Bilgisayarı, bilgi teknolojilerini, matematik ve bilgi edinmeyi gerçek manada seviyorum. Bu kurs ile
                        birlikte kendimi tazelemek ve aslında özlemimi gidermek istiyorum. Belli bir plan dahilinde
                        verilecek
                        eğitimin bena yeni bilgiler kazandıracağına ve bu bilgileri mevcut bilgileim ile birlikte kullanma
                        imkanına kavauşacağıma inanıyorum.</p>
                    <p>Programlama, Network veya Web Tasarımı gibi alanlarda çalışmak istiyorum. Mevcut şartlar beni tam
                        olarak
                        neye yönlendirecek bilemiyorum. Açıkçası Bilgisayar/Bilişim alanında hem okuma, hem de çalışma
                        fırsatı
                        yakalamayı çok istiyorum.</p>
                </fieldset>
            </div>
            <details id="details03">
                <summary>Hayallerinin Peşinden Git!!!</summary>
                <p>Genel anlamda edindiğim en temel tecrübe, bir şekilde insanın istekleri gerçekleşiyor. Bazen hoş bir
                    biçimde, bazen seninle dalga geçercesine. Bu nasıl oluyor tam olarak anlamlandıramıyorum ama mekanizma
                    bu şekilde işliyor. O halde en iyisi hiçbirşeyden korkmadan, çekinmeden insanın hayellerinin peşinden
                    gitmesi...</p>
            </details>
            <table id="Okul">
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Yil</th>
                        <th>Sınıf</th>
                        <th>Sehir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Atatürk</td>
                        <td>1987</td>
                        <td>İO1-5</td>
                        <td>Tunceli</td>
                    </tr>
                    <tr>
                        <td>S.OrtaOkulu</td>
                        <td>1993</td>
                        <td>OO1-3</td>
                        <td>İstanbul</td>
                    </tr>
                    <tr>
                        <td>Lise</td>
                        <td>1995</td>
                        <td>LH-3</td>
                        <td>İstanbul</td>
                    </tr>
                    <tr>
                        <td>Universte</td>
                        <td>1999</td>
                        <td>U1-4</td>
                        <td>İstanbul</td>
                    </tr>
                </tbody>
            </table>
            <table id="Cocuklar">
                <thead>
                    <tr>
                        <th>Isim</th>
                        <th>Yaş</th>
                        <th>Cinsiyet</th>
                        <th>Okul</th>
                        <th>Hobiler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Duru</td>
                        <td>9</td>
                        <td>Bayan</td>
                        <td>Ilkokul</td>
                        <td>Musik, Spor</td>
                    </tr>
                    <tr>
                        <td>Alp</td>
                        <td>4</td>
                        <td>Bay</td>
                        <td>Anaokulu</td>
                        <td>Yaramazlik</td>
                    </tr>
                </tbody>
            </table>
            <table id='Arkadaslar'>
                <thead>
                    <tr>
                    <th>Isim</th>
                        <th>Yaş</th>
                        <th>Cinsiyet</th>
                        <th>Meslek</th>
                        <th>Ne zaman tanıstık</th>
                        <th>Resim</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Erkan</td>
                        <td>40</td>
                        <td>Erkek</td>
                        <td>Tamirci</td>
                        <td>OrtaOkul</td>
                        <td><img src="https://cdn2.iconfinder.com/data/icons/scientist-1/512/scientist_emoji_emoticon_sticker_man_idea-128.png"
                                alt="MustiResim"></img></td>
                    </tr>
                    <tr>
                        <td>Mahmut</td>
                        <td>39</td>
                        <td>Erkek</td>
                        <td>Şöför</td>
                        <td>İlkokul</td>
                        <td><img src="https://cdn4.iconfinder.com/data/icons/gentleman-4/512/emoji_emoticon_sticker_man_gentleman_tea-128.png"
                                alt="MahmutResim"></img></td>
                    </tr>
                    <tr>
                        <td>Tamer</td>
                        <td>40</td>
                        <td>Erkek</td>
                        <td>Postacı</td>
                        <td>Son Dönem</td>
                        <td><img src="https://cdn2.iconfinder.com/data/icons/scientist-1/512/scientist_emoji_emoticon_sticker_man_idea-128.png"
                                alt="TamerResim"></img></td>
                    </tr>
                    <tr>
                        <td>Ayse</td>
                        <td>39</td>
                        <td>Kadın</td>
                        <td>Kuaför</td>
                        <td>Son Dönem</td>
                        <td><img src="https://cdn0.iconfinder.com/data/icons/avatar-gradient-your-personal-character/512/Female-512.png"
                                alt="AyseResim"></img></td>
                    </tr>
                </tbody>
            </table>
            <iframe src="https://www.youtube.com/embed/9YffrCViTVk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title='youtubemovie'></iframe>
        </main>
        <footer>
            <hr></hr>
            &copy;HO
        </footer>
    </div>
 
    );
}
