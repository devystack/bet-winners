<template>
    <div class ='load_style'>
        <div class ='load_content'>
            <font-awesome-icon icon="fa-solid fa-rotate" class="rotate fa fa-refresh fa-spin fa-5x fa-fw" />
        </div>
    </div>
</template>
<style lang="css">
    .load_content {
        width: 90px;
        height: 90px;
        position: fixed;
        inset: calc(50% - 45px);
        border: 1px solid rgba(0 0 0 0.2);
        background: rgb(255 255 255);
        overflow: unset;
        border-radius: 3px;
        outline: none;
        padding: 20px 14px 14px 14px;
        z-index: 1000;
    }
    .load_style {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        background: #00000096;
    }
    .rotate {
        animation: rotation 3s infinite linear;

    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }

    .m_load_style {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        background: #00000096;
    }

    .m_load_content {
        width: 200px;
        height: 200px;
        position: fixed;
        inset: calc(50% - 100px);
        border: 1px solid rgba(0 0 0 0.2);
        overflow: unset;
        border-radius: 3px;
        outline: none;
        z-index: 1000;
    }

</style>