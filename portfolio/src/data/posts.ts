export interface Term {
  term: string
  definition: string
}

export interface Post {
  slug: string
  date: string
  category: string
  title: {
    en: string
    vi: string
  }
  excerpt: {
    en: string
    vi: string
  }
  readTime: {
    en: string
    vi: string
  }
  body: {
    en: string
    vi: string
  }
  academicReferences: {
    en: string[]
    vi: string[]
  }
  glossary: {
    urbanDesign: {
      en: Term[]
      vi: Term[]
    }
    dataScience: {
      en: Term[]
      vi: Term[]
    }
  }
}

export const posts: Post[] = [
  {
    slug: 'spatial-game-theory',
    date: '2026-05-31',
    category: 'Spatial Analytics',
    title: {
      en: 'Spatial Game Theory: Programming the Payoff Matrix in Urban and Landscape Design',
      vi: 'Spatial Game Theory: Lập trình ma trận lợi ích trong thiết kế đô thị và cảnh quan',
    },
    excerpt: {
      en: 'Applying Game Theory to analyze resident behavioral dynamics and optimize the payoff matrix in urban and landscape design.',
      vi: 'Ứng dụng Lý thuyết trò chơi (Game Theory) để phân tích động lực hành vi của cư dân và tối ưu hóa ma trận lợi ích trong thiết kế đô thị và cảnh quan.',
    },
    readTime: {
      en: '8 min read',
      vi: '8 phút đọc',
    },
    body: {
      en: `## The City as an Infinite Game

In spatial research and practice, traditional urban planning often imposes fixed forms and static functional scenarios onto drawings, expecting humans to operate perfectly under those linear assumptions. However, the failure of deserted, abandoned plazas or park lawns destroyed by spontaneous desire lines is proof that the city is not a static model to be admired.

In reality, urban space operates as an infinite game, where each resident is an independent agent, always seeking to optimize their individual utility function based on the payoff structure and costs established by physical design.

Under the lens of Game Theory, urban and landscape design is essentially the process of programming behavioral rules through physical matter. When designers place a bench, a wall, alter an elevation, or create an opening, they are silently reshaping the payoff matrix and redistributing the behavioral costs of society. If the system of spatial rules runs counter to human survival dynamics and comfort optimization, the system will automatically seek new equilibrium states through behaviors that break the original structure.

## Desire Lines and the Nash Equilibrium

The phenomenon of spontaneous desire lines in landscapes is a classic example of an organic shift toward a Nash Equilibrium, where no player has an incentive to change their strategy while other players keep their behavior unchanged. When landscape architects intentionally extend pedestrian paths with geometric curves for visual aesthetics, they inadvertently increase the cost function of time and energy for users.

Faced with a choice matrix between complying with a time-consuming predefined path and cutting across the lawn to reach the destination fastest, the dominant strategy for each individual is inevitably to take the shortcut. When all agents independently execute this strategy, the collective suboptimal equilibrium is the destruction of the lawn.

Relying on administrative enforcement or physical barriers is merely an admission of helplessness in planning thought, which only heightens conflict and creates spatial inhibition. Conversely, a perceptive designer will restructure the rules of the game by formalizing these desire lines into primary pathways, while shifting green spaces to areas with natural boundaries, such as sloped terrain or thick shrub belts. In this way, we align the free strategy of the individual with landscape conservation goals, steering the system toward a sustainable new equilibrium.

## Physical Smart Contracts and Psychological Safety

At the scale of open spaces, landscape design acts as a physical smart contract to program social risk and trust among strangers. The failure of large, barren plazas to attract social interaction stems from a system error: the design inflates the psychological cost of stopping.

In a vast emptiness lacking visual anchors, standing still or sitting down maximizes an individual's social risk, leaving them highly visible and vulnerable. Consequently, the safest strategy for players is to move through as quickly as possible, turning the space into a non-cooperative game of apathy and isolation.

To reverse this structure, designers must decompose space into asymmetric, interwoven micro-structures. Integrating setbacks, medium-height green filters, or altering entrance floor heights establishes psychological buffer zones. When the cost of access and staying decreases, human behavior automatically shifts from defense to cooperation, fostering communication and connection. Community trust is then built not by slogans, but guaranteed by the safety that physical structures inherently provide.

## Resolving Sidewalk Zero-Sum Games

This strategic redirection is also the key to resolving zero-sum games in sidewalk conflicts typical of certain cities. Rigid administrative mindsets often push the relationship between storefront businesses and pedestrians into a direct confrontation—where clearing sidewalks for traffic destroys livelihoods, whereas unchecked business activities compromise safety.

A sharp landscape design solution does not choose sides; rather, it reframes the payoff matrix for both groups through physical filters. By utilizing paving materials with distinct textures and colors to define intuitive boundaries, and integrating soft infrastructure like urban trees, built-in benches, and planters, designers create a natural negotiation buffer. This soft infrastructure strip acts as a physical barrier protecting pedestrians, while serving as a legitimate functional space for supporting business activities.

Consequently, the interests of the two groups no longer cancel each other out but become intertwined, where the self-interested behavior of one group accidentally becomes a surplus value that elevates the experience of the other.

## Hostile Architecture vs. Humanist Adaptive Design

We cannot deny a more extreme side of urban architecture: the use of space as a proactive defense weapon to exclude certain groups of players from the spatial chessboard, commonly known as hostile architecture. Benches with middle armrests to prevent the homeless from sleeping, spikes under highway overpasses, or sloped surfaces to deter skateboarders are prime examples of aggressively inflating physical cost functions to protect the local interests of a powerful minority.

From a Game Theory perspective, this is a proactive spatial defense strategy. However, a humanist and sustainable urbanist will choose to expand the chessboard rather than eliminate players, steering toward adaptive spaces. These are structures designed to flex dynamically across different times of day: acting as spaces for commerce and transit during the day, playing fields in the afternoon, and controlled temporary shelters for the vulnerable at night. When the rules are inclusive enough to accommodate diverse survival strategies, the city moves past conflict to achieve macro-level social inclusion.

## Algorithmic Thinking in Urban Harmony

Ultimately, urban and landscape design has never been a purely aesthetic or technical problem; it is the science of steering conflict and shaping human hearts. Humans, driven by core needs, will always find loopholes to break imposed structures if they run counter to their interests.

An urbanist with algorithmic thinking does not try to lecture or alter human nature; they learn to accept and employ those self-interested motivations as design materials. When architectural elements, voids, and invisible boundaries are intelligently organized, space functions as a self-balancing entity, where the absolute freedom of each individual becomes the core driver preserving order, equity, and vitality for the entire social fabric.`,
      vi: `## Đô thị như một trò chơi lặp lại vô hạn

Trong nghiên cứu và thực hành không gian, tư duy quy hoạch (urban planning) truyền thống thường áp đặt các hình khối cố định và kịch bản công năng tĩnh (static function) lên bản vẽ, rồi kỳ vọng con người sẽ vận hành hoàn hảo theo các giả định tuyến tính (linear assumptions) đó. Tuy nhiên, sự thất bại của các quảng trường trống trải bị bỏ hoang hay các thảm cỏ công viên bị phá hủy bởi các lối đi tự phát (desire lines) chính là minh chứng cho thấy đô thị không phải là một mô hình tĩnh để chiêm ngưỡng.

Thực tế, không gian đô thị vận hành như một trò chơi lặp lại vô hạn (infinite game), nơi mỗi cư dân là một tác nhân (agent) có tư duy độc lập, luôn tìm cách tối ưu hóa (optimize) hàm lợi ích (utility function) cá nhân dựa trên cấu trúc phần thưởng (payoff structure) và chi phí (costs) mà thiết kế vật lý (physical design) thiết lập.

Dưới lăng kính của Lý thuyết trò chơi (Game Theory), thiết kế đô thị (urban design) và thiết kế cảnh quan (landscape design) thực chất là quá trình lập trình các quy tắc ứng xử bằng vật chất. Khi người thiết kế đặt một cái ghế, một bức tường, thay đổi một cao độ hay tạo ra một khoảng trống, họ đang âm thầm định hình lại ma trận phần thưởng (payoff matrix) và phân phối lại chi phí hành vi (behavioral cost) của xã hội. Nếu hệ thống quy tắc không gian đi ngược lại động lực sinh tồn và tối ưu hóa tiện nghi của con người, hệ thống đó sẽ tự động tìm kiếm các trạng thái cân bằng (equilibrium states) mới thông qua các hành vi phá vỡ cấu trúc ban đầu.

## Đường mòn tự phát và trạng thái Cân bằng Nash

Hiện tượng đường mòn tự phát (desire lines) trong cảnh quan là một ví dụ kinh điển cho sự dịch chuyển tự phát về trạng thái Cân bằng Nash (Nash Equilibrium), nơi không người chơi nào có động lực thay đổi chiến lược (strategy) khi các người chơi khác giữ nguyên hành vi. Khi kiến trúc sư cảnh quan cố tình kéo dài tuyến đi bộ bằng những đường cong hình học để phục vụ ý đồ thị giác, họ đã vô tình làm tăng hàm chi phí (cost function) thời gian và năng lượng của người sử dụng.

Đứng trước ma trận lựa chọn giữa việc tuân thủ cấu trúc định sẵn mất nhiều thời gian và việc đi cắt ngang qua thảm cỏ để đến mục tiêu nhanh nhất, chiến lược tối ưu cá nhân (dominant strategy) của mỗi người chắc chắn là đi tắt. Khi tất cả các tác nhân cùng thực hiện chiến lược này một cách độc lập, kết cục tồi tệ cho tổng thể hay trạng thái cận tối ưu (suboptimal equilibrium) xuất hiện là thảm cỏ bị phá hủy.

Việc sử dụng các giải pháp cưỡng chế hành chính (administrative enforcement) hay rào chắn thực chất là sự thừa nhận bất lực trong tư duy quy hoạch, chỉ làm gia tăng xung đột và tạo ra sự ức chế không gian (spatial inhibition). Ngược lại, một nhà thiết kế nhạy bén sẽ tái cấu trúc lại luật chơi bằng cách hợp thức hóa các tuyến đường mòn này thành hệ thống lối đi chính, đồng thời dịch chuyển các mảng xanh sang các vùng có ranh giới tự nhiên như địa hình dốc hoặc các dải cây bụi dày. Bằng cách này, chúng ta đồng hóa chiến lược tự do của cá nhân với mục tiêu bảo tồn cảnh quan, đưa hệ thống về một trạng thái cân bằng mới bền vững.

## Hợp đồng thông minh vật lý và an toàn tâm lý

Nhìn nhận ở quy mô không gian mở, thiết kế cảnh quan đóng vai trò như một dạng hợp đồng thông minh (smart contract) bằng vật chất nhằm lập trình rủi ro xã hội (social risk) và niềm tin giữa những người xa lạ. Sự thất bại của các quảng trường lớn, trống trải trong việc thu hút tương tác xã hội (social interaction) thực chất bắt nguồn từ một lỗi hệ thống (system error) khi thiết kế làm tăng chi phí tâm lý (psychological cost) cho việc dừng lại.

Giữa một khoảng trống mênh mông thiếu điểm tựa thị giác (visual anchors), việc một cá nhân đứng lại hoặc ngồi xuống đẩy rủi ro xã hội lên mức tối đa, khiến họ dễ bị quan sát và tổn thương. Do đó, chiến lược an sau nhất của người chơi là di chuyển thật nhanh qua đó, biến không gian thành một trò chơi không hợp tác (non-cooperative game) của sự thờ ơ và cô lập.

Để đảo ngược cấu trúc này, người làm thiết kế phải biết cách phân rã không gian thành các vi cấu trúc (micro-structures) đan cài phi đối xứng (asymmetric). Việc bổ sung các khoảng lùi, các bộ lọc bằng mảng xanh tầm trung, hay thay đổi cao độ sàn tiếp cận chính là cách thiết lập các vùng đệm (buffer zones) an toàn tâm lý. Khi chi phí cho việc tiếp cận và dừng lại giảm xuống, hành vi của con người sẽ tự động chuyển dịch từ trạng thái phòng thủ sang trạng thái hợp tác để giao lưu và kết nối. Niềm tin cộng đồng lúc này không được xây dựng bằng những lời kêu gọi khẩu hiệu, mà được bảo chứng bởi chính sự an toàn mà cấu trúc vật chất mang lại.

## Hóa giải trò chơi tổng bằng không trên vỉa hè đô thị

Sự điều hướng chiến lược này cũng là chìa khóa để hóa giải các trò chơi có tổng bằng không (zero-sum games) trong xung đột lợi ích vỉa hè tại các đô thị đặc thù. Tư duy quản lý hành chính dập khuôn thường đẩy mối quan hệ giữa các hộ kinh doanh mặt tiền và người đi bộ vào thế đối đầu trực diện, nơi việc giải tỏa vỉa hè để phục vụ giao thông sẽ triệt tiêu sinh kế của người dân, còn nếu buông lỏng cho kinh doanh tự phát thì phá vỡ an toàn hạ tầng.

Một giải pháp thiết kế cảnh quan sắc bén không chọn bên, mà chọn cách tái định hình lại ma trận phần thưởng (payoff matrix) cho cả hai nhóm đối tượng thông qua các bộ lọc vật lý. Bằng cách sử dụng các vật liệu lát nền có kết cấu và màu sắc khác biệt để phân định ranh giới trực giác, kết hợp đan cài các dải hạ tầng mềm (soft infrastructure) như cây xanh đô thị, ghế ngồi tích hợp và bồn cây, người thiết kế tạo ra một vùng đệm thương lượng tự nhiên. Dải hạ tầng mềm này đóng vai trò như một rào chắn vật lý bảo vệ người đi bộ, đồng thời lại là không gian chức năng hợp pháp cho các hoạt động phụ trợ của hộ kinh doanh. Khi đó, lợi ích của hai nhóm đối tượng không còn triệt tiêu nhau mà bện chặt vào nhau, hành vi tự tư lợi của nhóm này lại vô tình trở thành giá trị thặng dư (surplus value) nâng đỡ cho trải nghiệm của nhóm kia.

## Kiến trúc thù địch và thiết kế thích ứng nhân văn

Chúng ta không thể phủ nhận một góc khuất cực đoan khi kiến trúc đô thị đôi khi được sử dụng như một vũ khí phòng ngự chủ động nhằm loại bỏ một số nhóm người chơi ra khỏi bàn cờ không gian, hay còn gọi là kiến trúc thù địch (hostile architecture). Những chiếc ghế công viên có tay vịn ở giữa để ngăn người vô gia cư nằm ngủ, những khối bê tông nhọn hoắt dưới gầm cầu, hay các bề mặt nghiêng đẩy lùi giới trượt ván chính là các ví dụ điển hình của việc tăng hàm chi phí vật lý một cách cực đoan để bảo vệ lợi ích cục bộ của một nhóm thiểu số quyền lực.

Dưới góc độ Lý thuyết trò chơi, đây là một chiến lược phòng ngự chủ động (proactive defense strategy) bằng không gian. Tuy nhiên, một nhà làm đô thị có tư duy nhân văn và bền vững sẽ chọn giải pháp mở rộng bàn cờ thay vị triệt tiêu người chơi bằng cách hướng tới các không gian thích ứng (adaptive spaces). Đây là những cấu trúc có khả năng tự chuyển đổi linh hoạt theo các khung giờ khác nhau, ban ngày là không gian kinh doanh và giao thông, buổi chiều là sân chơi trẻ em, và ban đêm có thể trở thành nơi lưu trú tạm thời có kiểm soát của những người yếu thế. Khi luật chơi đủ bao dung để chấp nhận sự đa dạng của các chiến lược sinh tồn, đô thị mới thoát khỏi trạng thái xung đột để đạt đến một sự dung hợp xã hội (social inclusion) ở trạng thái cân bằng vĩ mô tối ưu.

## Lập trình sự tự cân bằng đô thị

Suy cho cùng, thiết kế đô thị và cảnh quan chưa bao giờ là một bài toán thẩm mỹ hay kỹ thuật thuần túy, nó chính là ngành khoa học về việc điều hướng xung đột và định hình nhân tâm. Con người với những nhu cầu sinh hoạt cốt lõi sẽ luôn tìm ra lỗ hổng để phá vỡ các cấu trúc áp đặt nếu chúng đi ngược lại lợi ích của họ.

Người làm đô thị có tư duy thuật toán (algorithmic thinking) không cố gắng giáo huấn hay thay đổi bản tính con người, mà họ học cách chấp nhận và sử dụng chính những động lực ích kỷ đó như một chất liệu thiết kế. Khi các yếu tố kiến trúc, khoảng trống và ranh giới vô hình được sắp đặt một cách thông tuệ, không gian sẽ tự vận hành như một thực thể tự cân bằng hoàn hảo, nơi sự tự do tuyệt đối của mỗi cá nhân lại chính là nhân tố cốt lõi bảo tồn sự trật tự, công bằng và sức sống cho toàn bộ cấu trúc xã hội.`,
    },
    academicReferences: {
      en: [
        'Nash, J. (1950). Non-Cooperative Games. Annals of Mathematics, 54(2), 286–295.',
        'Whyte, W. H. (1980). The Social Life of Small Urban Spaces. Conservation Foundation.',
        'Gehl, J. (2011). Life Between Buildings: Using Public Space. Island Press.',
        'Hillier, B., & Hanson, J. (1984). The Social Logic of Space. Cambridge University Press.',
      ],
      vi: [
        'Nash, J. (1950). Non-Cooperative Games. Annals of Mathematics, 54(2), 286–295. (Tài liệu gốc về Cân bằng Nash)',
        'Whyte, W. H. (1980). The Social Life of Small Urban Spaces. (Nghiên cứu thực nghiệm về quảng trường)',
        'Gehl, J. (2011). Life Between Buildings: Using Public Space. (Tác phẩm nền tảng về hoạt động không gian cộng đồng)',
        'Hillier, B., & Hanson, J. (1984). The Social Logic of Space. (Lý thuyết Cú pháp Không gian - Space Syntax)',
      ],
    },
    glossary: {
      urbanDesign: {
        en: [
          { term: 'Urban Planning', definition: 'Traditional approach imposing fixed spatial forms and static functional scenarios onto drawings, expecting humans to operate under those linear assumptions.' },
          { term: 'Desire Lines', definition: 'Spontaneous pathways formed by erosion caused by human foot traffic, indicating preferred paths of movement rather than planned routes.' },
          { term: 'Hostile Architecture', definition: 'Defensive design elements used to restrict behavior or exclude certain user groups (e.g. anti-homeless benches, underpass spikes).' },
          { term: 'Adaptive Space', definition: 'Flexible spatial structures that alter functions over time to accommodate diverse activities and survival strategies.' },
          { term: 'Soft Infrastructure', definition: 'Integrating natural or biological features like trees, shrubs, and parks as functional urban barriers.' },
        ],
        vi: [
          { term: 'Tư duy quy hoạch', definition: 'Cách tiếp cận truyền thống áp đặt các hình khối cố định và kịch bản công năng tĩnh lên bản vẽ, kỳ vọng con người vận hành theo các giả định tuyến tính.' },
          { term: 'Đường mòn tự phát', definition: 'Tuyến đường hình thành tự phát từ dấu chân người qua lại, thể hiện hướng di chuyển mong muốn thực tế hơn là thiết kế định sẵn.' },
          { term: 'Kiến trúc thù địch', definition: 'Cấu trúc phòng thủ nhằm hạn chế hành vi hoặc loại bỏ một số nhóm người chơi ra khỏi không gian (ví dụ: ghế chia ngăn, chông gầm cầu).' },
          { term: 'Không gian thích ứng', definition: 'Cấu trúc có khả năng tự chuyển đổi linh hoạt theo các khung giờ khác nhau để đáp ứng nhu cầu đa dạng của cư dân.' },
          { term: 'Hạ tầng mềm', definition: 'Tích hợp các yếu tố tự nhiên/sinh học như cây xanh, bồn hoa làm rào chắn vật lý và không gian chức năng hỗ trợ vỉa hè.' },
        ],
      },
      dataScience: {
        en: [
          { term: 'Game Theory', definition: 'The study of mathematical models of strategic interaction among rational decision-makers.' },
          { term: 'Payoff Matrix', definition: 'A table showing the payoffs (rewards/costs) received by each player for every combination of strategies.' },
          { term: 'Utility Function', definition: 'A mathematical representation of an agent’s preferences, measuring comfort, cost, and time efficiency.' },
          { term: 'Nash Equilibrium', definition: 'A state in which no player has an incentive to unilaterally change their chosen strategy.' },
          { term: 'Dominant Strategy', definition: 'A strategy that yields the best outcome for a player, regardless of what strategy other players choose.' },
          { term: 'Zero-Sum Game', definition: 'A situation where one player’s gain is exactly equal to the other players’ loss, resulting in direct conflict.' },
        ],
        vi: [
          { term: 'Lý thuyết trò chơi', definition: 'Ngành khoa học nghiên cứu các mô hình toán học về tương tác chiến lược giữa các tác nhân đưa ra quyết định độc lập.' },
          { term: 'Ma trận lợi ích', definition: 'Bảng thể hiện phần thưởng hoặc chi phí nhận được của mỗi người chơi ứng với từng tổ hợp chiến lược lựa chọn.' },
          { term: 'Hàm lợi ích', definition: 'Công thức biểu thị mức độ ưu tiên hoặc tiện nghi của một tác nhân dựa trên phần thưởng vật lý và chi phí hành vi.' },
          { term: 'Cân bằng Nash', definition: 'Trạng thái mà không người chơi nào có động cơ đơn phương thay đổi chiến lược khi các người chơi khác giữ nguyên hành vi.' },
          { term: 'Chiến lược tối ưu', definition: 'Lựa chọn mang lại kết quả tốt nhất cho một cá nhân bất kể các người chơi khác chọn chiến lược nào.' },
          { term: 'Trò chơi tổng bằng không', definition: 'Tình huống mà lợi ích của một nhóm đối tượng sẽ trực tiếp triệt tiêu hoặc lấy đi từ lợi ích của nhóm đối tượng khác.' },
        ],
      },
    },
  },
]
