<template>
  <div>
    <subHeader
      title="Животные"
      :items="[
        {
          name: 'Активный',
          link: '/home/stalls/active',
          link_name: 'stall_active',
        },
        {
          name: 'Архив',
          link: '/home/stalls/archive',
          link_name: 'stall_archive',
        },
      ]"
    />
  </div>
</template>
