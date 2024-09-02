import { Globe, Browsers, Compass, SquareHalfBottom, Article, ChalkboardTeacher } from 'phosphor-react'

export const deskStructure = (S: any, context: any) =>
  S.list()
    .title('Vertio Studio')
    .items([
      // PAGES ------------------
      S.listItem()
        .title('Pages')
        .icon(Browsers)
        .child(
          S.list()
            .title('Sider')
            .items([
              S.documentTypeListItem("page").title("Tutorials").icon(Browsers),
            ]),
        ),
    ])

export default deskStructure