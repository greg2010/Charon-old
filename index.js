var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;
var hashHistory = ReactRouter.browserHistory;

class Menu extends React.Component {
    render() {
        return (
            <nav className="upMenu">
                <ul className="topleft">
                    <li><IndexLink to="/" activeClassName="red">home</IndexLink></li>
                    <li><Link to="/about" activeClassName="red">about</Link></li>
                    <li><Link to="/reg" activeClassName="red">registration</Link></li>
                    <li><Link to="/login" activeClassName="red">login</Link></li>
                </ul>
            </nav>);
    }
}

class Login extends React.Component {
    render() {
        return (

            <div className="col-md-2 col-md-offset-5 loginWrap">
                <p className="loginTitle">log in</p>
                <p className="">ingame name/email</p>
                <input className="col-md-10 col-md-offset-1" type="text"/>
                <p className="">password</p>
                <input className="col-md-10 col-md-offset-1" type="password"/>
                <button className="col-md-6 col-md-offset-3 loginBut">Enter</button>
            </div>

        );
    }
}

class About extends React.Component {
    render() {
        return (

            <div className="aboutWrap">

                    <h1>About</h1>
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eius enim error eum id iure molestias natus necessitatibus non nostrum odit ratione, repellat similique soluta, temporibus tenetur ullam voluptates voluptatibus.</span><span>Ad, assumenda autem cupiditate enim facere fugiat harum id obcaecati quaerat quia recusandae reiciendis reprehenderit totam ullam unde velit veniam? Ea mollitia possimus velit? At eius in molestiae saepe velit?</span><span>Accusantium amet aperiam cumque doloribus in neque nisi praesentium, qui tempora vitae. Assumenda eum, explicabo maxime nam ullam unde veniam? Amet earum est iste praesentium recusandae repudiandae sit vitae voluptatibus?</span><span>Ad at autem cum dolor dolorem, doloremque eius exercitationem incidunt ipsum iure libero, magni numquam odio quaerat rem sunt tempora ut? Accusamus accusantium ducimus magni nobis numquam obcaecati placeat possimus.</span><span>Ab accusantium ad dolor, dolorum eaque, est eveniet exercitationem laudantium nesciunt repudiandae saepe soluta vel veniam vero voluptates. Aliquid beatae consequuntur debitis doloribus ducimus eaque id labore molestias sint voluptates.</span><span>Ad alias aliquid animi aut, cum debitis dolore ducimus eligendi eos est eum facere inventore laborum minima molestiae natus obcaecati odio officia placeat quas reprehenderit sapiente, ullam velit veniam voluptatum!</span><span>Ad architecto at distinctio eos excepturi iure laboriosam, non omnis optio quam similique sint ut vel. Aliquam delectus dolor minima mollitia, non numquam possimus quas quis repellat. Delectus, sequi soluta?</span><span>Aliquam asperiores aspernatur, dicta ducimus eius explicabo hic impedit ipsa libero magni minima modi necessitatibus, nisi perspiciatis placeat porro provident quibusdam repudiandae rerum sit, totam ullam vel veritatis vero voluptate?</span><span>Error et fugiat libero nesciunt pariatur placeat quia saepe sed soluta vitae! Laboriosam, similique, voluptatem. Architecto commodi consectetur cupiditate deserunt ex harum itaque odit, quo rerum sint? Delectus, ex quisquam.</span><span>Adipisci asperiores assumenda commodi consequatur cumque eaque et, eum eveniet exercitationem impedit ipsa ipsam nesciunt nihil provident, quaerat quia quisquam quod quos similique suscipit, tempora ullam vero vitae voluptatibus voluptatum?</span><span>Culpa debitis deserunt distinctio dolor dolorum ducimus eius est, ex harum in iste laudantium, minima minus molestiae nisi odit perspiciatis placeat praesentium provident quas quo reprehenderit repudiandae sunt suscipit ullam!</span><span>Accusantium at excepturi officiis optio sed. Assumenda corporis, enim eveniet magnam odio provident quam temporibus. Asperiores aut commodi est excepturi, facere fugiat iste iusto omnis porro, praesentium soluta tenetur voluptatibus.</span><span>Aperiam asperiores aspernatur, assumenda consequuntur cupiditate deserunt esse excepturi incidunt labore laudantium minus neque omnis perferendis quas quisquam sequi, veniam vero voluptatem? Impedit mollitia qui quod. Accusantium enim id voluptatum?</span><span>Accusantium architecto aspernatur at cumque, deleniti eius harum iure maxime provident, qui reiciendis repellendus sint tenetur, ut vero. Alias dicta eaque, earum eius et impedit necessitatibus quod sint? Aliquid, aspernatur.</span><span>At deleniti dolorem expedita laboriosam pariatur? Aperiam aspernatur earum illum iusto minus. Deserunt, dolorem ex expedita explicabo incidunt perferendis quod sequi soluta ullam vero! Dicta hic laboriosam odit provident qui?</span><span>Alias amet autem consequuntur fuga iste itaque labore magni, quidem vero voluptatem. Architecto commodi explicabo facere harum, maiores nisi nulla optio quia sapiente sequi. Dolore error illo pariatur possimus ratione!</span><span>Aspernatur atque consequatur corporis debitis distinctio dolor doloremque eligendi error eum, explicabo facere illum, inventore laudantium maiores molestiae mollitia nam, nemo odit officiis omnis quibusdam quidem ratione reprehenderit velit veritatis.</span><span>Ab autem dicta dolore eius eum eveniet, expedita, hic impedit iusto maxime nesciunt odio officia officiis praesentium quas quidem quo repudiandae similique totam, vel? Earum mollitia odit praesentium reiciendis sapiente!</span><span>Ab aut cum cumque error explicabo facilis, harum, iure perspiciatis porro provident quibusdam reiciendis suscipit temporibus totam voluptates! Architecto delectus doloribus hic incidunt nemo neque provident repudiandae. Eveniet ipsa, neque.</span><span>Aliquam beatae cumque expedita maiores nobis praesentium quis tempore! Dolorum ducimus eveniet exercitationem facilis ipsam non perspiciatis quis quod recusandae repellat. Aliquid dicta dolore expedita labore molestiae quae quibusdam saepe?</span><span>Aspernatur aut, beatae expedita impedit, ipsa nemo, nulla obcaecati officia officiis perferendis repellendus tempora voluptas voluptatum? A ipsum itaque omnis. Ab aliquam aut deserunt exercitationem laudantium pariatur quia repudiandae sequi.</span><span>Accusantium amet animi exercitationem explicabo, incidunt itaque modi mollitia necessitatibus nisi perspiciatis quam quibusdam, quidem quod, recusandae repellendus saepe temporibus. Expedita facilis fuga itaque natus nemo quas qui quis rem?</span><span>Animi excepturi quo ut. Aperiam beatae culpa magni nobis officia quae quia quidem quo, tempore. Ab commodi delectus eaque maiores nam nostrum omnis qui quisquam ratione, reprehenderit saepe sed vero?</span><span>Accusamus libero modi perferendis quidem tempore. At beatae consequuntur cumque cupiditate delectus dolor dolorem, doloremque doloribus, maxime modi nihil numquam pariatur quaerat quasi qui quis quisquam similique suscipit totam vero!</span><span>A ad alias aperiam, architecto aspernatur aut, consequuntur debitis deserunt dolorem doloremque earum fugiat, impedit incidunt inventore ipsa nisi non odit optio placeat quo ratione repellat sed tempora ut voluptatem.</span><span>Accusamus ad adipisci assumenda debitis deserunt enim magnam natus ratione voluptatibus! Molestias officia quaerat quam repudiandae, tempora ullam. Est in ipsam ipsum odit officiis omnis quaerat quos sed velit voluptates?</span><span>Debitis error et ipsum itaque iure libero maxime modi officiis, qui sunt temporibus voluptas. Autem consectetur earum eligendi id illo inventore iusto, molestias nobis quasi repudiandae totam vel voluptates, voluptatum.</span><span>Aliquam aut, commodi, consectetur consequuntur cumque doloribus eius facere, incidunt labore nisi nobis repellendus sed totam! Accusantium animi, blanditiis dolor eius esse eum fugit inventore iure minus nulla sint soluta?</span><span>Consequatur enim fugit ipsam porro, sapiente velit voluptatibus. Doloremque eaque eligendi, enim harum labore nemo, non odit optio suscipit, tempora ut voluptatibus? Architecto autem, cum eligendi esse hic unde voluptatum.</span><span>Consectetur debitis eligendi esse et explicabo inventore ipsa iusto magni maxime modi molestiae natus non obcaecati odio officiis omnis placeat quidem quis quisquam quod quos sit, soluta tenetur veniam voluptates.</span><span>Corporis ea esse laborum perferendis quibusdam quis voluptas voluptate? Aliquid asperiores consectetur esse nisi perspiciatis quo vero. Aspernatur est et illo ipsum, iusto, minus molestias quae quibusdam recusandae sapiente voluptates.</span><span>Ea, ex, odit! Accusamus accusantium corporis deleniti dolor doloremque doloribus eaque eos explicabo in inventore ipsam libero molestias obcaecati perferendis quaerat quibusdam quod, recusandae voluptatem. Assumenda excepturi in minima sint.</span><span>Aliquid amet dolores eaque explicabo facilis in inventore nostrum, tenetur! Accusantium asperiores beatae blanditiis deserunt dolorem doloribus error, ex, fugit id iure magnam neque numquam provident quibusdam recusandae rem, vitae?</span><span>Commodi deleniti dolor esse est impedit nobis voluptate. Animi dolore incidunt neque quibusdam sequi? Expedita fuga impedit ipsa nemo odit sunt. Assumenda doloribus eum id illo nisi, quas tenetur velit!</span><span>Architecto consequatur corporis cum cupiditate dicta doloremque dolores, earum fugiat incidunt iusto neque officia quibusdam quidem. Consequatur, error excepturi libero minus odio vero? Dicta eligendi ipsam nam omnis totam voluptate?</span><span>Amet blanditiis corporis deserunt distinctio dolor doloremque eius eveniet facere fugiat illo libero maiores molestias mollitia nisi, odit officiis pariatur quae quo sit temporibus? At beatae dolorum eligendi ex optio.</span><span>A asperiores consequuntur culpa dolore dolores, ea fuga fugiat illo impedit itaque magnam obcaecati officia optio quaerat quas quos rem similique soluta temporibus ullam vel velit veritatis voluptas voluptate voluptates.</span><span>Adipisci dolores earum inventore magnam maiores natus? Autem consequuntur corporis deserunt doloribus ducimus expedita, facere fugit inventore iste itaque maxime odit officia perferendis sed sequi tenetur ut voluptatibus! Itaque, quis.</span><span>Alias corporis deleniti dolorum, eaque earum error et fuga fugiat fugit harum libero modi natus neque nesciunt numquam pariatur possimus praesentium provident quasi quisquam sed soluta sunt totam veritatis voluptatem.</span><span>Aperiam aspernatur debitis dolorem, ex in nemo non quia quis? Aliquid animi ex fuga modi molestiae neque, optio perspiciatis quasi quod recusandae velit voluptatum! Delectus nihil quisquam repellendus temporibus voluptatem.</span>
                    </p>

            </div>

        );
    }
}


class MainLogo extends React.Component {
    render() {
        return (
            <main>
                <div className="col-md-6 col-md-offset-3 star">
                    <p className="coal"> coalition</p>
                    <p className="cname red">red menace</p>
                    <Link to="/reg" className="btn btn-default btn-lg regBut">registration</Link>
                </div>
            </main>
        );
    }
}


class Sleepers extends React.Component {
    render() {
        return (
            <main className="col-md-8 col-md-offset-2 sleepers">
                <h1>Drifters stole this page...</h1>
                <p>404 Page not found.</p>
            </main>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="cont">
                <Menu />
                {this.props.children}

            </div>
        );
    }
}

class NotFound extends React.Component {
    render() {
        return (
            <div className="mainWrap">
                <Sleepers />
            </div>
        );
    }
}
class Home extends React.Component {
    render() {
        return (
            <div className="mainWrap">
                <MainLogo />


            </div>
        );
    }
}


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="login" component={Login}/>
            <Route path="about" component={About}/>
            {/*<Route path="register" component={Register} />*/}
            <Route path="*" component={NotFound}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>,


    document.getElementsByClassName('wrap')[0]    // где мы этот элемент хотим создать
);

